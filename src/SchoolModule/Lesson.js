export class Lesson {
    topics = [];
    construcor(title, topics){
        this.title = title;
        this.topics = Array.isArray(topics) ? topics : this.topics;
    }
}