package org.clinic.controller;

import java.util.List;
import org.clinic.entity.Slot;
import org.clinic.services.SlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SlotController {

	@Autowired
	private SlotService service;

	@RequestMapping(method = RequestMethod.POST, value = "/addSlot")
	public boolean addSlot(@RequestBody Slot slot) {
		boolean response = service.addSlot(slot);
		return response;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getSlots")
	public List<Slot> getSlots() {
		return service.getSlots();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getSlot/{id}")
	public String getSlot(@PathVariable int id) {
		return service.getSlot(id);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getSlotsByDate/{date}")
	public List<Slot> getSlotsByDate(@PathVariable String date) {
		return service.getSlotsByDate(date);
	}
}
