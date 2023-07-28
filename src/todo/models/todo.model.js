import { v4 as uuidv4 } from 'uuid';

/**
 * @param {number} id
 * @param {string} title
 * @param {boolean} status
 */
export class Todo {
    constructor(title, status) {
        this.id = uuidv4();
        this.title = title;
        this.status = Boolean(status);
        this.createdAt = new Date();
    }
    
}