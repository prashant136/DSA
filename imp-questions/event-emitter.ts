/**
 * Spread --> Expands elements from an array or object. used in (function calls, array/object copying)
 * Rest --> Gathers multiple function arguments into an array, used in (function parameters)
 */

/**
 * An EventEmitter is a pattern commonly used for handling events in JavaScript/TypeScript. It's used in Node.js (EventEmitter class) and frontend frameworks like React (Event System).
    Use Cases of EventEmitter
    Decoupled Communication
    Example: In a chat application, different parts of the app listen for "newMessage" events.
    Pub-Sub Model (Observer Pattern)
    Example: A notification system where different components subscribe to "userLogin".
    Custom Events in UI Components
    Example: Button clicks, form submissions.
    Logging and Monitoring
    Example: Emit "error" events and log them.
    Streaming and Data Processing
    Example: Event-driven architecture for real-time updates.
 */
class EventEmitter {
    private events: Map<string, Function[]> = new Map();

    // Registers an event listener.
    on(event: string, listener: Function): void {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event)!.push(listener);
    }

    // Executes a listener only once.
    once(event: string, listener: Function): void {
        const onceWrapper = (...args: any[]) => {
            listener(...args);
            this.off(event, onceWrapper); // Remove listener after execution
        };
        this.on(event, onceWrapper);
    }

    // Calls all listeners for an event.
    emit(event: string, ...args: any[]): void {
        if (!this.events.has(event)) return;
        for (const listener of this.events.get(event)!) {
            listener(...args);
        }
    }

    // Removes a specific listener.
    off(event: string, listener: Function): void {
        if (!this.events.has(event)) return;
        this.events.set(
            event,
            this.events.get(event)!.filter(l => l !== listener)
        );
    }

    // Removes all listeners for an event.
    removeAll(event: string): void {
        this.events.delete(event);
    }
}

// Example Usage:
const emitter = new EventEmitter();

const greet = (name: string) => console.log(`Hello, ${name}!`);
emitter.on("greet", greet);

emitter.emit("greet", "Alice"); // Hello, Alice!
emitter.emit("greet", "Bob"); // Hello, Bob!

emitter.off("greet", greet);
emitter.emit("greet", "Charlie"); // (No output)

const oneTimeEvent = () => console.log("This runs once!");
emitter.once("runOnce", oneTimeEvent);
emitter.emit("runOnce"); // This runs once!
emitter.emit("runOnce"); // (No output)

