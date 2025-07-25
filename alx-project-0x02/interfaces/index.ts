export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
