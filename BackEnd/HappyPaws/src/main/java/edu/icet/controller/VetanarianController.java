package edu.icet.controller;

import edu.icet.dto.Veternarian;
import edu.icet.service.VetService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vet")
@RequiredArgsConstructor
@CrossOrigin
public class VetanarianController {
    @Autowired
    final VetService service;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Veternarian> getAll(){
        return service.getAll();
    }

    @PostMapping("/add-vet")
    @ResponseStatus(HttpStatus.CREATED)
    public void addVet(@RequestBody Veternarian veternarian){
        service.addVet(veternarian);
    }
}
