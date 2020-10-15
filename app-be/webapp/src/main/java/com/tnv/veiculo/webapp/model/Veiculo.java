package com.tnv.veiculo.webapp.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author Bruno Touron
 *
 */

@Entity
@Table(name = "Veiculo")
public class Veiculo {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private long Id;
	
	@Column(name="Veiculo")
    private String Veiculo;

    @Column(name="Marca")
    private String Marca;

    @Column(name="Ano")
    private Integer Ano;

    @Column(name="Descricao")
    private String Descricao;

    @Column(name="Vendido")
    private boolean Vendido;
        
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "Created")
    private Date Created;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "Updated")
    private Date Updated;

    public Veiculo(long id, String veiculo, String marca, Integer ano, String descricao, boolean vendido, Date created,
			Date updated) {
		super();
		this.Id = id;
		Veiculo = veiculo;
		Marca = marca;
		Ano = ano;
		Descricao = descricao;
		Vendido = vendido;
		Created = created;
		Updated = updated;
	}
    
	public Veiculo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		this.Id = id;
	}

	public String getVeiculo() {
		return Veiculo;
	}

	public void setVeiculo(String veiculo) {
		Veiculo = veiculo;
	}

	public String getMarca() {
		return Marca;
	}

	public void setMarca(String marca) {
		Marca = marca;
	}

	public Integer getAno() {
		return Ano;
	}

	public void setAno(Integer ano) {
		Ano = ano;
	}

	public String getDescricao() {
		return Descricao;
	}

	public void setDescricao(String descricao) {
		Descricao = descricao;
	}

	public boolean isVendido() {
		return Vendido;
	}

	public void setVendido(boolean vendido) {
		Vendido = vendido;
	}

	public Date getCreated() {
		return Created;
	}

	public void setCreated(Date created) {
		Created = created;
	}

	public Date getUpdated() {
		return Updated;
	}

	public void setUpdated(Date updated) {
		Updated = updated;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Ano == null) ? 0 : Ano.hashCode());
		result = prime * result + ((Created == null) ? 0 : Created.hashCode());
		result = prime * result + ((Descricao == null) ? 0 : Descricao.hashCode());
		result = prime * result + ((Marca == null) ? 0 : Marca.hashCode());
		result = prime * result + ((Updated == null) ? 0 : Updated.hashCode());
		result = prime * result + ((Veiculo == null) ? 0 : Veiculo.hashCode());
		result = prime * result + (Vendido ? 1231 : 1237);
		result = prime * result + (int) (Id ^ (Id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Veiculo other = (Veiculo) obj;
		if (Ano == null) {
			if (other.Ano != null)
				return false;
		} else if (!Ano.equals(other.Ano))
			return false;
		if (Created == null) {
			if (other.Created != null)
				return false;
		} else if (!Created.equals(other.Created))
			return false;
		if (Descricao == null) {
			if (other.Descricao != null)
				return false;
		} else if (!Descricao.equals(other.Descricao))
			return false;
		if (Marca == null) {
			if (other.Marca != null)
				return false;
		} else if (!Marca.equals(other.Marca))
			return false;
		if (Updated == null) {
			if (other.Updated != null)
				return false;
		} else if (!Updated.equals(other.Updated))
			return false;
		if (Veiculo == null) {
			if (other.Veiculo != null)
				return false;
		} else if (!Veiculo.equals(other.Veiculo))
			return false;
		if (Vendido != other.Vendido)
			return false;
		if (Id != other.Id)
			return false;
		return true;
	}

    
}

