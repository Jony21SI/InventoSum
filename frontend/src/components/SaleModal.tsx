"use client";

import { useState } from "react";

interface SaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SaleModal({ isOpen, onClose }: SaleModalProps) {
  const [formData, setFormData] = useState({
    customer: "",
    date: new Date().toISOString().split("T")[0],
    items: [{ product: "", quantity: "", price: "" }],
    notes: "",
  });

  const products = [
    "Notebooks",
    "Pens",
    "Backpacks",
    "Books",
    "Accessories",
    "Pencils",
    "Markers",
    "Paper",
    "Folders",
    "Staplers",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, { product: "", quantity: "", price: "" }],
    }));
  };

  const removeItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Creating sale:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#101a23] rounded-lg border border-[#314d68] max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-white text-2xl font-bold leading-tight">
                New Sale
              </h2>
              <p className="text-[#90adcb] text-sm font-normal leading-normal mt-1">
                Create a new sales transaction
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#90adcb] hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Customer and Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Customer
                </label>
                <input
                  type="text"
                  value={formData.customer}
                  onChange={(e) =>
                    handleInputChange("customer", e.target.value)
                  }
                  className="w-full rounded-lg text-white border border-[#314d68] bg-[#182634] focus:border-[#314d68] h-12 px-4 text-base font-normal leading-normal"
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="w-full rounded-lg text-white border border-[#314d68] bg-[#182634] focus:border-[#314d68] h-12 px-4 text-base font-normal leading-normal"
                />
              </div>
            </div>

            {/* Items */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-white text-sm font-medium">
                  Items
                </label>
                <button
                  type="button"
                  onClick={addItem}
                  className="text-[#0c7ff2] hover:text-[#0a6fd8] text-sm font-medium"
                >
                  + Add Item
                </button>
              </div>

              <div className="space-y-3">
                {formData.items.map((item, index) => (
                  <div key={index} className="flex gap-3 items-end">
                    <div className="flex-1">
                      <label className="block text-white text-sm font-medium mb-2">
                        Product
                      </label>
                      <input
                        type="text"
                        list={`products-${index}`}
                        value={item.product}
                        onChange={(e) =>
                          handleItemChange(index, "product", e.target.value)
                        }
                        className="w-full rounded-lg text-white border border-[#314d68] bg-[#182634] focus:border-[#314d68] h-12 px-4 text-base font-normal leading-normal"
                        placeholder="Search or type product name"
                      />
                      <datalist id={`products-${index}`}>
                        {products.map((product) => (
                          <option key={product} value={product} />
                        ))}
                      </datalist>
                    </div>
                    <div className="w-24">
                      <label className="block text-white text-sm font-medium mb-2">
                        Qty
                      </label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(index, "quantity", e.target.value)
                        }
                        className="w-full rounded-lg text-white border border-[#314d68] bg-[#182634] focus:border-[#314d68] h-12 px-4 text-base font-normal leading-normal"
                        placeholder="0"
                      />
                    </div>
                    <div className="w-32">
                      <label className="block text-white text-sm font-medium mb-2">
                        Price
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={item.price}
                        onChange={(e) =>
                          handleItemChange(index, "price", e.target.value)
                        }
                        className="w-full rounded-lg text-white border border-[#314d68] bg-[#182634] focus:border-[#314d68] h-12 px-4 text-base font-normal leading-normal"
                        placeholder="0.00"
                      />
                    </div>
                    {formData.items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="text-red-400 hover:text-red-300 h-12 px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192V208Z" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={3}
                className="w-full rounded-lg text-white border border-[#314d68] bg-[#182634] focus:border-[#314d68] px-4 py-3 text-base font-normal leading-normal resize-none"
                placeholder="Add any additional notes..."
              />
            </div>

            {/* Total */}
            <div className="border-t border-[#314d68] pt-4">
              <div className="flex justify-between items-center">
                <span className="text-white text-lg font-medium">Total:</span>
                <span className="text-white text-xl font-bold">
                  $
                  {formData.items
                    .reduce(
                      (sum, item) =>
                        sum +
                        (parseFloat(item.price) || 0) *
                          (parseInt(item.quantity) || 0),
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-[#314d68] text-white text-sm font-medium hover:bg-[#182634] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-lg bg-[#0c7ff2] text-white text-sm font-bold hover:bg-[#0a6fd8] transition-colors"
            >
              Create Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
