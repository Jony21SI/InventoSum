package com.inventosum.repository;

import com.inventosum.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    Page<Product> findByUserId(Long userId, Pageable pageable);
    
    List<Product> findByUserId(Long userId);
    
    Optional<Product> findByCodeAndUserId(String code, Long userId);
    
    boolean existsByCodeAndUserId(String code, Long userId);
    
    @Query("SELECT p FROM Product p WHERE p.user.id = :userId AND p.stock <= p.minStock")
    List<Product> findLowStockProducts(@Param("userId") Long userId);
    
    @Query("SELECT p FROM Product p WHERE p.user.id = :userId AND " +
           "(LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(p.code) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(p.category) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<Product> searchProducts(@Param("userId") Long userId, @Param("search") String search, Pageable pageable);
    
    @Query("SELECT p.category FROM Product p WHERE p.user.id = :userId AND p.category IS NOT NULL GROUP BY p.category")
    List<String> findCategoriesByUserId(@Param("userId") Long userId);
    
    @Query("SELECT COUNT(p) FROM Product p WHERE p.user.id = :userId")
    long countByUserId(@Param("userId") Long userId);
    
    @Query("SELECT SUM(p.stock) FROM Product p WHERE p.user.id = :userId")
    Long getTotalStock(@Param("userId") Long userId);
} 