package io.finbook.api.models.dao;

import io.finbook.api.models.entities.Client;
import org.springframework.data.repository.CrudRepository;

public interface IClientDao extends CrudRepository<Client, Long> {

}
