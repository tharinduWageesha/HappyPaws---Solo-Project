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
@Table(name = "Blog")
public class BlogEntity {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer blogID;
   private String title;
   private String author;
   private String body;
   private String img;
   private String category;
}
