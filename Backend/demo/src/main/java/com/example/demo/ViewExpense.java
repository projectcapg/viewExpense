package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViewExpense extends CrudRepository<ExpenseClaimed, Integer> {

}
