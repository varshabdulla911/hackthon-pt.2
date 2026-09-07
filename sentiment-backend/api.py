from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from sentiment import analyze_batch

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class PostsRequest(BaseModel):
    posts: List[str]

@app.get("/")
def home():
    return {"message": "Sentiment API is running!"}

@app.post("/analyze")
def analyze(request: PostsRequest):
    return analyze_batch(request.posts)