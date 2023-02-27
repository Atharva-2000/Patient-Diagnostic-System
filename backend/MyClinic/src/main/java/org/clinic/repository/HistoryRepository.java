package org.clinic.repository;

import org.clinic.entity.History;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface HistoryRepository extends CrudRepository<History, Integer> {

	@Query(value = "SELECT * FROM history WHERE patient_id = :patient_id ", nativeQuery = true)
	History getHistory(@Param("patient_id") int patient_id);
}
