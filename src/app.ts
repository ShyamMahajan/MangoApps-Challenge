import { CreateSlot } from "./components/CreateSlot";
import { FiltersForm } from "./components/Filters";
import { Form } from "./components/Form";
import { NoSlot } from "./components/NoSlot";

export const no_slot_render = NoSlot.getInstance()
export const slot_component = CreateSlot.getInstance();
new Form()
new FiltersForm()