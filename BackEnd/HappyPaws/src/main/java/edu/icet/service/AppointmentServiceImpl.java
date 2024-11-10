package edu.icet.service;

import edu.icet.dto.Appointment;
import edu.icet.entity.AppointmentEntity;
import edu.icet.entity.UserEntity;
import edu.icet.repository.AppointmentRepository;
import edu.icet.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AppointmentServiceImpl implements AppointmentService {
    private final AppointmentRepository repository;
    private final ModelMapper mapper;

    @Override
    public List<Appointment> getAll() {
        ArrayList<Appointment> appointmentArrayList = new ArrayList<>();
        repository.findAll().forEach(entity->{
            appointmentArrayList.add(mapper.map(entity,Appointment.class));
        });
        return appointmentArrayList;
    }

    @Override
    public void addAppointment(Appointment appointment) {
        AppointmentEntity map = mapper.map(appointment, AppointmentEntity.class);
        repository.save(map);
    }

    @Override
    public void updateAppointment(Appointment appointment) {
        repository.save(mapper.map(appointment,AppointmentEntity.class));
    }

    @Override
    public boolean deleteAppointment(Integer appointmentid) {
        repository.deleteById(appointmentid);
        return true;
    }

}
