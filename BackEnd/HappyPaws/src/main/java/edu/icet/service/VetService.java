package edu.icet.service;

import edu.icet.dto.Veternarian;

import java.util.List;

public interface VetService {
    List<Veternarian> getAll();
    void addVet(Veternarian veternarian);
    void updateUser(Veternarian veternarian);
}
