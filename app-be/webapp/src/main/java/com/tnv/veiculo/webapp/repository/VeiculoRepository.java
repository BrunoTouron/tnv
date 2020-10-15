package com.tnv.veiculo.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tnv.veiculo.webapp.model.Veiculo;

/**
 * @author Bruno Touron
 *
 */

public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> { 

}
