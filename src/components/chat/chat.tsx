'use client';
import { useChat } from 'ai/react';
import styles from './Chat.module.sass';

export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: props.agent
      }
    ],
  });

  return (
    <main className={styles.chat} >
      <h1 className={styles.chat__title}>Ask anything, buy everything</h1>
      <form onSubmit={handleSubmit} className={styles.chat__form}>
        <input
          className={styles.chat__input}
          value={input}
          onChange={handleInputChange}
          placeholder="What would you like to buy?"
        />
        <button
          className={styles.chat__button}
        >
          Send
        </button>
      </form>
      <section className={styles.chat__messages}>
        {messages
          .filter(m => m.role !== 'system')
          .map(m => {
            return (
              <span key={m.id} className={styles.chat__message}>
                <div className={styles.chat__message__icon}>
                  {m.role === "assistant" ? "🤖" : "😊"}
                </div>
                <div>
                  {m.content}
                </div>
              </span>
            )
          }

          )}
      </section>
    </main>
  );
}