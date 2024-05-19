import { cn } from "@/utils/tailwindcss"

const ChatDesign = () => (
  <section className="space-y-10">
    <h1 className="text-heading-1">Chat Design</h1>
    <div>
      <div className="w-fit rounded-lg bg-emerald-900 p-2">
        <svg
          className="size-8 stroke-zinc-100"
          width="100%"
          height="100%"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z"
            stroke="current"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </div>

    <div className="flex w-[600px] flex-col gap-4">
      {CHAT_EXAMPLE.map(({ id, speaker: { type, thumbnail }, content }) => {
        const isManager = type === "manager"
        return (
          <div
            key={`${id}`}
            className={cn("flex w-full gap-3", {
              "self-end": !isManager,
            })}
          >
            <div className={cn("avatar", { "order-last": !isManager })}>
              <div className="size-10 rounded-full">
                <img src={thumbnail} alt={thumbnail} />
              </div>
            </div>

            <ul className="w-full space-y-2">
              {content.map((text) => (
                <li
                  key={String(text)}
                  className={cn(
                    "chat-bubble flex items-center whitespace-pre-line text-sm",
                    {
                      "chat-bubble-basic float-end": !isManager,
                    }
                  )}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  </section>
)

export default ChatDesign

const CHAT_EXAMPLE = [
  {
    id: 1,
    speaker: {
      type: "manager",
      thumbnail:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    content: [
      "반갑습니다, 저는 당신의 리뷰를 도와줄 리뷰 매니저입니다.\n당신의 프로젝트에 대한 정보를 간략히 작성해주세요.",
      "상세하게 작성할 수록 좋은 회고가 될 수 있을거에요!",
    ],
  },
  {
    id: 2,
    speaker: {
      type: "me",
      thumbnail:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    content: [
      "약 3개월 간 진행되었던 프로젝트이며,\n3명의 팀원이 참여했어요!",
      "기존에 예상했던 진행 기간은 2개월 정도로 예상했어요.",
    ],
  },
  {
    id: 3,
    speaker: {
      type: "manager",
      thumbnail:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    content: [
      "좋습니다! 예상했던 기간보다 프로젝트를 오래 진행하셨네요.",
      "예상치 못한 문제가 있거나 일정 산정에 고려하지 못한 부분이 있었나요?",
    ],
  },
  {
    id: 4,
    speaker: {
      type: "me",
      thumbnail:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    content: [
      "휴가 일정이 있었던 팀원들을 고려하지 못하고 일정을 산정했고",
      "기획 내용이 변경되어 중간에 많은 것들을 변경하기도 했어요.",
    ],
  },
  {
    id: 5,
    speaker: {
      type: "manager",
      thumbnail:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    content: [
      "확인했습니다! 충분한 정보를 전달해주셔서 감사합니다.\n해당 정보를 기반으로 액션 아이템을 구성해볼게요.",
      <div key="loading" className="flex w-10 justify-center">
        <span className="loading loading-bars loading-sm" />
      </div>,
    ],
  },
]
