package com.hand.tracking.controller;

import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(value = "/myapi/download")
public class DownloadController {

    @CrossOrigin(origins = "http://localhost:54609")
    @GetMapping("/downloadFile")
    public ResponseEntity<Resource> downloadFile(@RequestParam String fileName) throws MalformedURLException {
        // Load the file from disk
        Path path = Paths.get("C:\\Users\\aeldeeb\\Downloads\\" + "graph_minuts.txt");
        Resource resource = new UrlResource(path.toUri());

        // Set the content type and attachment header
        String contentType = "application/octet-stream";
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName);

        // Return the file as a response
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
    }
}
