package com.indeed.indeedprojectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indeed.indeedprojectDao.PostDao;
import com.indeed.indeedprojectDto.PostDto;
import com.indeed.indeedprojectModel.PostModel;
@Service
public  class PostServiceImpl implements PostService{

	@Autowired
	PostDao postDao;
	@Override
	public PostModel savePost(PostDto postDto) {
		PostModel postModel=new PostModel();
		postModel.setProfile(postDto.getProfile());
		postModel.setDescription(postDto.getDescription());
		postModel.setSalary(postDto.getSalary());
		postModel.setExperience(postDto.getExperience());
		postModel.setTechnology(postDto.getTechnology());
		postModel.setType(postDto.getType());
		return postDao.save(postModel);
	} 
	

}
