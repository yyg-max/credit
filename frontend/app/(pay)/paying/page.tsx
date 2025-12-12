import { Suspense } from "react"
import { PayingMain } from "@/components/common/pay/paying/paying-main"

export default function PayPage() {
  return (
    <Suspense>
      <PayingMain />
    </Suspense>
  )
}
