package io.finbook.api.models.services;

import io.finbook.api.models.entities.Client;

import java.util.List;

public interface ClientServiceLocal {

	public List<Client> findAll();

	public Client findById(Long id);

	public Client save(Client client);

	public void delete(Long id);

}
