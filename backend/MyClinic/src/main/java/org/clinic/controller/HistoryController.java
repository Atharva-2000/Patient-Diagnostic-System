package org.clinic.controller;

import org.clinic.entity.History;
import org.clinic.services.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class HistoryController {

	@Autowired
	private HistoryService service;

	@RequestMapping(method = RequestMethod.POST, value = "/addHistory")

	public boolean addHistory(@RequestBody History history) {

		boolean response = service.addHistory(history);

		return response;

	}

	@RequestMapping(method = RequestMethod.GET, value = "/getHistory/{patient_id}")

	public History getHistory(@PathVariable int patient_id) {

		return service.getHistory(patient_id);

	}

	@RequestMapping(method = RequestMethod.GET, value = "/checkHistory/{patient_id}")

	public boolean checkHistory(@PathVariable int patient_id) {
		return service.checkHistory(patient_id);
	}

}