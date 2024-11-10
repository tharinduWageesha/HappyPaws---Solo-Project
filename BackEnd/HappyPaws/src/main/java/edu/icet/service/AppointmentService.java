package edu.icet.service;

import edu.icet.dto.Appointment;

import java.util.List;

public interface AppointmentService {
    List<Appointment> getAll();
    void addAppointment(Appointment appointment);
    void updateAppointment(Appointment appointment);

    boolean deleteAppointment(Integer appointmentid);
}
