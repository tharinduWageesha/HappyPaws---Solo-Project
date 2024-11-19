package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Appointment {
    private Integer appointmentID;
    private String type;
    private String veterinarian;
    private LocalDate date;
    private LocalTime time;
    private String email;
}
