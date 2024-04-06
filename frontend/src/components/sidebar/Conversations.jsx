import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const {loading, conversations}= useGetConversations();
  console.log("CONVERSATION: ", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">

        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx = {idx === conversation.length - 1}
            />
        ))}

        {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations;

// STARTER CODE SNIPPET 
// import conversation from "./conversation";
// const conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <conversation />
//         <conversation />
//         <conversation />
//         <conversation />
//         <conversation />
//         <conversation />
//     </div>
//   )
// }

// export default conversations;