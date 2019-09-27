package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.IdException;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ViewController {

	@Autowired
	ViewExpense ve ;
	
	@GetMapping(value = "/view/{id}")
	public ExpenseClaimed viewExpense(@PathVariable("id") int id) throws IdException {
		
		ExpenseClaimed ec = null;
		if(ve.existsById(id)) {
			ec =  ve.findById(id).get();
			return ec;
		}
		else
			throw new IdException("id does not exist : "+ id);		
	}
	
	@PostMapping(value = "/post")
	public ExpenseClaimed addExpense(@RequestBody ExpenseClaimed ec) {
		ve.save(ec);
		return ec;
	}
	
	@GetMapping(value = "/getAll")
	public Iterable<ExpenseClaimed> getAll(){
		return ve.findAll();
	}
}
