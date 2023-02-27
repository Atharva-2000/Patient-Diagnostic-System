package org.clinic.repository;

import java.util.List;

import org.clinic.entity.Slot;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface SlotRepository extends CrudRepository<Slot, Integer> {

	@Query(value = "SELECT start_time FROM slot  WHERE id = :id", nativeQuery = true)
	String fetchSlot(int id);

	@Query(value = "SELECT * FROM clinic.slot WHERE clinic.slot.id NOT IN (SELECT slot_id FROM clinic.appointment WHERE date = :date AND status = 'Active');", nativeQuery = true)
	List<Slot> getSlotByDate(String date);

}
