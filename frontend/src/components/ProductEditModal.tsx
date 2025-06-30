"use client";

import { useState } from "react";
import Header from "./Header";

interface ProductEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: {
    name: string;
    description: string;
    sku: string;
    category: string;
    price: string;
    stock: string;
    reorderPoint: string;
    supplier: string;
    supplierCode: string;
    weight: string;
    dimensions: string;
    barcode: string;
    notes: string;
  };
}

export default function ProductEditModal({
  isOpen,
  onClose,
  product,
}: ProductEditModalProps) {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    sku: product?.sku || "",
    category: product?.category || "",
    price: product?.price || "",
    stock: product?.stock || "",
    reorderPoint: product?.reorderPoint || "",
    supplier: product?.supplier || "",
    supplierCode: product?.supplierCode || "",
    weight: product?.weight || "",
    dimensions: product?.dimensions || "",
    barcode: product?.barcode || "",
    notes: product?.notes || "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving product:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="/inventory" showNotifications={true} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                  {product ? "Edit Product" : "Add Product"}
                </p>
                <p className="text-[#90adcb] text-sm font-normal leading-normal">
                  Manage product details, pricing, and inventory levels.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              {[
                { label: "Product Name", field: "name" },
                { label: "Description", field: "description" },
                { label: "SKU", field: "sku" },
                { label: "Category", field: "category" },
                { label: "Price", field: "price" },
                { label: "Stock Quantity", field: "stock" },
                { label: "Reorder Point", field: "reorderPoint" },
                { label: "Supplier", field: "supplier" },
                { label: "Supplier Code", field: "supplierCode" },
                { label: "Weight (lbs)", field: "weight" },
                { label: "Dimensions (in)", field: "dimensions" },
                { label: "Barcode", field: "barcode" },
                { label: "Notes", field: "notes" },
              ].map(({ label, field }) => (
                <div
                  key={field}
                  className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
                >
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">
                      {label}
                    </p>
                    <input
                      type={
                        field === "price" ||
                        field === "stock" ||
                        field === "reorderPoint" ||
                        field === "weight"
                          ? "number"
                          : "text"
                      }
                      value={formData[field as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#314d68] bg-[#182634] focus:border-[#314d68] h-14 placeholder:text-[#90adcb] p-[15px] text-base font-normal leading-normal"
                      placeholder={`Enter ${label.toLowerCase()}`}
                    />
                  </label>
                </div>
              ))}

              <div className="flex px-4 py-3 justify-end">
                <button
                  onClick={handleSave}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0a6fd8] transition-colors"
                >
                  <span className="truncate">Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
