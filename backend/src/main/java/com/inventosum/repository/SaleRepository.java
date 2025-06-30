package com.inventosum.repository;

import com.inventosum.entity.Sale;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
    
    Page<Sale> findByUserId(Long userId, Pageable pageable);
    
    List<Sale> findByUserId(Long userId);
    
    Optional<Sale> findBySaleNumberAndUserId(String saleNumber, Long userId);
    
    @Query("SELECT s FROM Sale s WHERE s.user.id = :userId AND s.createdAt BETWEEN :startDate AND :endDate")
    List<Sale> findByUserIdAndDateRange(@Param("userId") Long userId, 
                                       @Param("startDate") LocalDateTime startDate, 
                                       @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT s FROM Sale s WHERE s.user.id = :userId AND s.customer.id = :customerId")
    List<Sale> findByUserIdAndCustomerId(@Param("userId") Long userId, @Param("customerId") Long customerId);
    
    @Query("SELECT SUM(s.total) FROM Sale s WHERE s.user.id = :userId AND s.createdAt BETWEEN :startDate AND :endDate")
    BigDecimal getTotalSalesByDateRange(@Param("userId") Long userId, 
                                       @Param("startDate") LocalDateTime startDate, 
                                       @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT COUNT(s) FROM Sale s WHERE s.user.id = :userId AND s.createdAt BETWEEN :startDate AND :endDate")
    long getSalesCountByDateRange(@Param("userId") Long userId, 
                                 @Param("startDate") LocalDateTime startDate, 
                                 @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT s.paymentMethod, COUNT(s) FROM Sale s WHERE s.user.id = :userId AND s.createdAt BETWEEN :startDate AND :endDate GROUP BY s.paymentMethod")
    List<Object[]> getSalesByPaymentMethod(@Param("userId") Long userId, 
                                          @Param("startDate") LocalDateTime startDate, 
                                          @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT SUM(s.total) FROM Sale s WHERE s.user.id = :userId")
    BigDecimal getTotalSales(@Param("userId") Long userId);
    
    @Query("SELECT COUNT(s) FROM Sale s WHERE s.user.id = :userId")
    long getSalesCount(@Param("userId") Long userId);
} 