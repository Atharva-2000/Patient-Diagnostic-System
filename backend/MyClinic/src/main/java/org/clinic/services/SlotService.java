package org.clinic.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import org.clinic.entity.Appointment;
import org.clinic.entity.Slot;
import org.clinic.repository.AppointmentRepository;
import org.clinic.repository.SlotRepository;

@Service
public class SlotService {

	@Autowired
	private SlotRepository repo;

	@Autowired
	private AppointmentRepository arepo;

	public boolean addSlot(Slot slot) {
		for (Slot med : repo.findAll()) {

			if (med.getStart_time().equals(slot.getStart_time())) {
				return false;
			}
		}

		repo.save(slot);
		return true;
	}

	public List<Slot> getSlots() {
		List<Slot> list = new ArrayList<>();

		for (Slot slot : repo.findAll()) {
			list.add(slot);
		}
		return list;
	}

	public String getSlot(int id) {
		String Slot = repo.fetchSlot(id);
		if (Slot == null) {
			return "Slot not found";
		}
		return Slot;
	}

	public List<Slot> getSlotsByDate(String date) {

		System.out.println(date);

		for (Appointment apt : arepo.findAll()) {

			System.out.println(apt.getDate().toString().substring(0, 10));

			if (apt.getDate().toString().substring(0, 10).equals(date)) {

				System.out.println("Date Equal");

				return repo.getSlotByDate(date);

			}

		}

		List<Slot> list = new ArrayList<>();

		System.out.println("Date not equal");

		for (Slot slot : repo.findAll()) {

			list.add(slot);

		}

		return list;

	}
}
