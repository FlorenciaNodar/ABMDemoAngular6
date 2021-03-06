USE [java]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 7/19/2018 12:14:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[idUser] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[identidad] [int] NULL,
	[direccion] [varchar](50) NULL,
	[dni_number] [int] NULL,
	[dni_type] [varchar](50) NULL,
	[email] [varchar](50) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[idUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([idUser], [nombre], [apellido], [identidad], [direccion], [dni_number], [dni_type], [email]) VALUES (2003, N'dfdsfdsds', N'ffff', NULL, N'jj@af.com', 3565, N'asdk', N'j')
INSERT [dbo].[Users] ([idUser], [nombre], [apellido], [identidad], [direccion], [dni_number], [dni_type], [email]) VALUES (3002, N'Fernando', N'Sone', NULL, N'skdfasldfsd', 35764575, N'DNI', N'fslds@asd.com')
SET IDENTITY_INSERT [dbo].[Users] OFF
