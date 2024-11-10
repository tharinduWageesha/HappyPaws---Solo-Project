package edu.icet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Vet")
public class VetanarianEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vetID;
    private String vetName;
    private String vetEmail;
}
