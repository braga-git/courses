export class Course {
    constructor(name, description, subject, price) {
        this.id
        this.name = name
        this.description = description
        this.subject = subject
        this.price = price
        this.users = []
    }

    addToUsers(user) {
        this.users.push(user)
    }

    removeFromUsers(userId){
        const updatedUsers = this.users.filter(user => user.id !== userId);
        this.users = updatedUsers
    }
}
