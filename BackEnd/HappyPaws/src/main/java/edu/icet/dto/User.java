package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {
    private String email;
    private String name;
    private String password;
    private String petName;
    private LocalDate birthday;
    private String breed;
    private String pet_picture;
    private String gender;
    public String address;
    public Double weight;
    public Double height;
    public String alergies;

}
