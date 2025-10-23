import { Button, IconButton, AvatarButton, ButtonGroup } from './index'

// Icons for examples
const ChevronRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Check = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const User = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const ThumbsUp = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
  </svg>
)

const ThumbsDown = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17" />
  </svg>
)

const Divider = () => (
  <span className="w-px h-4 bg-current opacity-50" />
)

const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h2 className="text-heading-3-bold mb-4">Button Components</h2>
        
        {/* Primary Buttons */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Primary Buttons</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Request demo</Button>
            <Button variant="secondary">Request demo</Button>
            <Button variant="text">Button</Button>
          </div>
        </div>

        {/* Button States */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Button States</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Default</Button>
            <Button variant="primary">Hover</Button>
            <Button variant="primary">Focus</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="sm">Button-sm</Button>
            <Button variant="primary" size="md">Button</Button>
            <Button variant="primary" size="lg">Button-lg</Button>
          </div>
        </div>

        {/* Block Buttons */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Block Buttons</h3>
          <div className="max-w-md space-y-3">
            <Button variant="primary" block>Button</Button>
            <Button variant="secondary" block>Button</Button>
          </div>
        </div>

        {/* Trailing Icon */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Trailing Icon</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" trailingIcon={<ChevronRight />}>Request demo</Button>
            <Button variant="secondary" trailingIcon={<ChevronRight />}>Request demo</Button>
          </div>
        </div>

        {/* Trailing Divider */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Trailing Divider</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" trailingIcon={<Check />} trailingDivider={<Divider />}>Settings</Button>
            <Button variant="secondary" trailingIcon={<ChevronRight />} trailingDivider={<Divider />}>Settings</Button>
          </div>
        </div>

        {/* Leading Icon */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Leading Icon</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" leadingIcon={<User />}>Follow</Button>
          </div>
        </div>

        {/* Avatar Button */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Avatar Button</h3>
          <div className="flex flex-wrap gap-3">
            <AvatarButton variant="secondary" avatar={<User />} trailingIcon={<ChevronRight />}>Action</AvatarButton>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Icon Buttons</h3>
          <div className="flex flex-wrap gap-3">
            <IconButton variant="primary" icon={<ThumbsUp />} aria-label="Like" />
            <IconButton variant="outline" icon={<ThumbsDown />} aria-label="Dislike" />
          </div>
        </div>

        {/* Button Group */}
        <div className="mb-6">
          <h3 className="text-xl-2-semibold mb-3">Button Group</h3>
          <ButtonGroup spacing="md">
            <Button variant="primary">First</Button>
            <Button variant="secondary">Second</Button>
            <Button variant="text">Third</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default ButtonExamples


