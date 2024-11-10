package edu.icet.repository;


import edu.icet.entity.VetanarianEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VetRepository extends JpaRepository<VetanarianEntity, Integer> {
}
