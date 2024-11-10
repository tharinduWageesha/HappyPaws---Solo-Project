package edu.icet.service;

import edu.icet.dto.Veternarian;
import edu.icet.entity.VetanarianEntity;
import edu.icet.repository.VetRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
@RequiredArgsConstructor
@Service
public class VetServiceImpl implements VetService {
    private final VetRepository repository;
    private final ModelMapper mapper;

    @Override
    public List<Veternarian> getAll() {
        return List.of();
    }

    @Override
    public void addVet(Veternarian veternarian) {
        VetanarianEntity map = mapper.map(veternarian, VetanarianEntity.class);
        repository.save(map);
    }

    @Override
    public void updateUser(Veternarian veternarian) {

    }
}
