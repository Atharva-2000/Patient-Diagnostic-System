package org.clinic.services;

import org.clinic.entity.History;
import org.clinic.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistoryService {

	@Autowired
	private HistoryRepository repo;

	public History getHistory(int patient_id) {

		System.out.println("Reached getHistory");

		return repo.getHistory(patient_id);

	}

	public boolean addHistory(History history) {

		for (History hed : repo.findAll()) {

			if (hed.getPatient().getPatient_id() == history.getPatient().getPatient_id()) {

				System.out.println("History already exists for this patient");

				return false;

			}

		}

		try {

			repo.save(history);

		} catch (Exception e) {

			e.printStackTrace();

			return false;

		}

		return true;

	}

	public boolean checkHistory(int patient_id) {

		for (History history : repo.findAll()) {

			if (history.getPatient().getPatient_id() == patient_id) {

				return true;

			}

		}

		return false;

	}
}