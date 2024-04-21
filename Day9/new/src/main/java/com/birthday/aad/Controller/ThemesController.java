package com.birthday.aad.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.birthday.aad.Entity.Themes;
import com.birthday.aad.Service.ThemesService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/themes")
@CrossOrigin(origins = "http://localhost:5173")
public class ThemesController {

    private final ThemesService themesService;

    @Autowired
    public ThemesController(ThemesService themesService) {
        this.themesService = themesService;
    }

    @PostMapping("/create")
    public ResponseEntity<Themes> createThemes(@RequestBody Themes themes) {
        return ResponseEntity.status(HttpStatus.CREATED).body(themesService.createThemes(themes));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Themes>> getAllThemes() {
        return ResponseEntity.ok(themesService.getAllThemes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Themes> getThemesById(@PathVariable int id) {
        Optional<Themes> themes = themesService.getThemesById(id);
        return themes.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update")
    public ResponseEntity<Themes> updateThemes(@RequestBody Themes themes) {
        return ResponseEntity.ok(themesService.updateThemes(themes));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteThemes(@PathVariable int id) {
        themesService.deleteThemes(id);
        return ResponseEntity.noContent().build();
    }
}
