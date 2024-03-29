import { useState } from "react";
import {
  SfInput,
  SfSwitch,
  useDisclosure,
  useTrapFocus,
  useDropdown,
  InitialFocusType,
  SfButton,
} from "@storefront-ui/react";
import BackHeader from "../../components/BackHeader";
import { Link } from "react-router-dom";
import TestPageTraditional from "../TestPage/TestPageTraditional";

export default function PostPage() {
  const [personalInformation, setPersonalInformation] = useState(true);
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);

  const { close, isOpen } = useDisclosure();

  const { refs } = useDropdown({ isOpen, onClose: close });

  useTrapFocus(refs.floating, {
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: InitialFocusType.autofocus,
  });

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();
    const userData = {
      username,
      description,
    };

    console.log(userData);
  };

  return (
    <>
    <BackHeader/>
    <Link to={'/test'}>Test Page</Link>
    <div className="px-4 mt-5">
    <TestPageTraditional/>
      <form onSubmit={sendForm}>
        <label className="text-xs flex justify-between cursor-pointer mb-4 gap-2">
          Don’t display my personal information on a public profile
          <SfSwitch
            checked={personalInformation}
            onChange={() => setPersonalInformation(!personalInformation)}
          />
        </label>
        <label>
          <span className="typography-label-sm font-medium">Username *</span>
          <SfInput
            value={username}
            invalid={usernameIsInvalid}
            className=""
            required
            onInput={() =>
              username
                ? setUsernameIsInvalid(false)
                : setUsernameIsInvalid(true)
            }
            onBlur={() =>
              username
                ? setUsernameIsInvalid(false)
                : setUsernameIsInvalid(true)
            }
            onChange={(event) => setUsername(event.target.value)}
          />
          {usernameIsInvalid && (
            <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">
              The field cannot be empty
            </p>
          )}
        </label>

        <label>
          <span className="typography-label-sm font-medium block mt-4">
            Description
          </span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Write something about yourself..."
            className="block w-full py-2 pl-4 pr-7 rounded-md border border-neutral-300 placeholder:text-neutral-500"
          />
        </label>
        <p className="text-xs text-neutral-500 typography-text-sm mt-2">
          * marked fields are required
        </p>
        <div className="flex gap-x-4 md:justify-end mt-6">
         
          <SfButton type="submit" className="flex-grow md:flex-grow-0">
            Submit
          </SfButton>
        </div>
      </form>
    </div>
    </>
  );
}
