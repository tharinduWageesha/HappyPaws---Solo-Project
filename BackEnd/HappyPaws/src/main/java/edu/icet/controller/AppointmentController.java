package edu.icet.controller;

import edu.icet.dto.Appointment;
import edu.icet.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/appointment")
@RequiredArgsConstructor
@CrossOrigin
public class AppointmentController {
    @Autowired
    final AppointmentService service;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Appointment> getAll(){
        return service.getAll();
    }

    @PostMapping("/add-appointment")
    @ResponseStatus(HttpStatus.CREATED)
    public void addAppoitment(@RequestBody Appointment appointment){
        service.addAppointment(appointment);
    }

    @PutMapping("/update-appointment")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateAppointment(@RequestBody Appointment appointment){
        service.updateAppointment(appointment);
    }

    @DeleteMapping("/delete-appointment/{appointmentid}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public boolean deleteAppointment(@PathVariable Integer appointmentid){
        return service.deleteAppointment(appointmentid);
    }
}
