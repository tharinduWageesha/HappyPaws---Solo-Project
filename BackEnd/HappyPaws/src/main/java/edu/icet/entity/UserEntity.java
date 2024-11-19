package edu.icet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "User")
public class UserEntity {
    @Id
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
