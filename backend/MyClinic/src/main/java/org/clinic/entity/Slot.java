package org.clinic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "slot")
public class Slot {
	
	@Id
	@Column(name = "id")
	private int slot_id;
	
	@Column(name = "start_time")
	private String start_time;
	
	public Slot() {
		
	}

	public Slot(int slot_id, String start_time) {
		this.slot_id = slot_id;
		this.start_time = start_time;
	}

	public int getSlot_id() {
		return slot_id;
	}

	public void setSlot_id(int slot_id) {
		this.slot_id = slot_id;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	@Override
	public String toString() {
		return "Slot [slot_id=" + slot_id + ", start_time=" + start_time + "]";
	}
	
	
}
