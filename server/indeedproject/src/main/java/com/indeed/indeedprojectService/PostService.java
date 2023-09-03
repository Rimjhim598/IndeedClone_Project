package com.indeed.indeedprojectService;

import com.indeed.indeedprojectDto.PostDto;
import com.indeed.indeedprojectModel.PostModel;

public interface PostService {
  public PostModel savePost(PostDto postDto);
}
