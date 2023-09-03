package com.indeed.indeedprojectController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.indeed.indeedprojectDto.PostDto;
import com.indeed.indeedprojectModel.PostModel;
import com.indeed.indeedprojectService.PostService;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin
public class PostController {
	@Autowired
	 PostService postService;
	@PostMapping("/post")
  public PostModel  savepost(@Valid @RequestBody PostDto postDTORequest) 
	{
     log.info("save post######");
     return this.postService.savePost(postDTORequest);
}
}
