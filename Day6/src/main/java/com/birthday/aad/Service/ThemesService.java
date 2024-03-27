package com.birthday.aad.Service;


import com.birthday.aad.Entity.Themes;
import com.birthday.aad.Repository.ThemesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ThemesService {

    private final ThemesRepository themesRepository;

    @Autowired
    public ThemesService(ThemesRepository themesRepository) {
        this.themesRepository = themesRepository;
    }

    // Create operation
    public Themes createThemes(Themes themes) {
        return themesRepository.save(themes);
    }

    // Read operation
    public List<Themes> getAllThemes() {
        return themesRepository.findAll();
    }

    public Optional<Themes> getThemesById(int id) {
        return themesRepository.findById(id);
    }

    // Update operation
    public Themes updateThemes(Themes themes) {
        return themesRepository.save(themes);
    }

    // Delete operation
    public void deleteThemes(int id) {
        themesRepository.deleteById(id);
    }
}
