package com.inventosum.repository;

import com.inventosum.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
    Page<Customer> findByUserId(Long userId, Pageable pageable);
    
    List<Customer> findByUserId(Long userId);
    
    Optional<Customer> findByPhoneAndUserId(String phone, Long userId);
    
    Optional<Customer> findByEmailAndUserId(String email, Long userId);
    
    @Query("SELECT c FROM Customer c WHERE c.user.id = :userId AND " +
           "(LOWER(c.name) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(c.phone) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(c.email) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<Customer> searchCustomers(@Param("userId") Long userId, @Param("search") String search, Pageable pageable);
    
    @Query("SELECT COUNT(c) FROM Customer c WHERE c.user.id = :userId")
    long countByUserId(@Param("userId") Long userId);
    
    @Query("SELECT c FROM Customer c WHERE c.user.id = :userId ORDER BY c.sales.size DESC")
    List<Customer> findTopCustomersByUserId(@Param("userId") Long userId, Pageable pageable);
} 