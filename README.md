# 🛠️ Advanced Nest.js CLI (ANC)

A powerful command-line tool to boost your productivity when working with NestJS projects.  
Generate boilerplate code for DTOs and more — cleanly, consistently, and fast.

Resources for CRUD controllers: controllers, services, DTOs and tests are usually very similar.
This tool should help speed up the creation of the new CRUD controller in existing Nest.js project.

## 📦 Installation

```bash
npm install -g advanced-nestjs-cli
```

## 🚀 Usage

```bash
anc [command] [...args]
```

## 📚 Available Commands

| Command                                 | Description                                                    |
|-----------------------------------------|----------------------------------------------------------------|
| `anc generate dto <name> [path]`        | Generates DTO files for all CRUD operations                    |
| `anc generate controller <name> [path]` | Generated Controller file with methods for all CRUD operations |

## 📦 Example

```bash
anc g dto user
```

This will generate:

```
create-user-request-body.dto.ts
create-user-response.dto.ts
delete-user-request-params.dto.ts
edit-user-request-body.dto.ts
edit-user-request-params.dto.ts
edit-user-response.dto.ts
get-user-request-params.dto.ts
get-user-response.dto.ts
user.dto.ts
```

You can also specify a custom path:

```bash
anc g dto product ./app/dtos/user
```
Note: path must lead to the existing folder

## 💡 Features

- 🔧 Fast and consistent DTO boilerplate generation
- 🧼 Follows NestJS file naming and structure conventions
- 💼 CLI-first developer experience

## 🛠 Roadmap

- [ ] `controller` boilerplate generation for CRUD
- [ ] Automatic annotations with `@nestjs/swagger` decorators of `controller` boilerplate
- [ ] `service` boilerplate generation for CRUD
- [ ] Support `controller` + `service` + `dto` generation (connected)
- [ ] `logger` boilerplate generation
- [ ] `test` boilerplate generation for CRUD
- [ ] Migrate to typescript
- [ ] Add linter
- [ ] Full coverage with tests

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first  
to discuss what you would like to change.

## 📄 License

MIT