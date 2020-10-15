package com.tnv.veiculo.webapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tnv.veiculo.webapp.model.Veiculo;
import com.tnv.veiculo.webapp.repository.VeiculoRepository;

/**
 * @author Bruno Touron
 *
 */

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

	private VeiculoRepository repository;

	VeiculoController(VeiculoRepository repository) {
		this.repository = repository;
	}

	@GetMapping
	public List<Veiculo> get() {
		return repository.findAll();
	}
	
	@GetMapping(path = {"{id}" })
	public Veiculo getByIdUrl(@PathVariable Integer id) {
						
		return repository.findById(id).get();
	}
	
	@PostMapping()
	public Veiculo post(@RequestBody Veiculo veiculo) {
		return repository.save(veiculo);
	}
	
	@PutMapping(path = {"{id}" })
	public ResponseEntity<Veiculo> put(@RequestBody Veiculo veiculo, @PathVariable Integer id) {
		
		if (!repository.findById(id).isPresent()) {
			// log.error("Id " + id + " is not existed");
			ResponseEntity.badRequest().build();
		}

		return ResponseEntity.ok(repository.save(veiculo));
		
	}

	@DeleteMapping(path = {"{id}" })
	public ResponseEntity delete(@RequestBody Veiculo veiculo, @PathVariable Integer id) {
				
		if (!repository.findById(id).isPresent()) {
			// log.error("Id " + id + " is not existed");
			ResponseEntity.badRequest().build();
		}
		
		repository.deleteById(id);
		
		return ResponseEntity.ok().build();
		
	}
	
}
