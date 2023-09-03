package com.indeed.indeedprojectDao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.indeed.indeedprojectModel.PostModel;

public interface PostDao extends MongoRepository<PostModel,String>{

}
