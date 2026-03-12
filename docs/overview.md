# Spike 1: Flujo de Datos End-to-End y Validación

### Descripción

**Objetivo:** Demostrar empíricamente que un formulario Angular con validación reactiva puede enviar datos a un endpoint Spring Boot que los valida, transforma (DTO → Entidad) y persiste en H2, confirmando la ==viabilidad del corte vertical completo==.

**Por qué va primero:** Este Spike es la "rebanada larga y delgada" que describe tu `fases_de_desarrollo.md` (Paso 1). Es el cimiento sobre el que se apoyan *todos* los demás Spikes. Si no tenés certeza empírica de que los datos fluyen desde el `<ion-input>` hasta la tabla `users` en H2, todo lo demás es especulación.

#### Soluciones Alternativas y "Ruptura de Reglas"

| Enfoque                                                     | Alineación con tus Reglas                                                                                | Análisis                                                                                                                                                                                                                            |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mapeo manual DTO→Entidad** (factory method o constructor) | Alineado. Tus reglas no mencionan librerías de mapeo.                                                    | Es el enfoque más didáctico para el MVP. Escribís el mapeo a mano, entendés cada campo.                                                                                                                                             |
| **MapStruct** (generador de código en compilación)          | Ruptura parcial. No está prohibido, pero agrega una dependencia y configuración de annotation processor. | Vale la pena conocerlo porque es el estándar de la industria para proyectos con >10 DTOs. En tu MVP con 2-3 Records, el mapeo manual es suficiente y más transparente. Investigalo como *learning test*, no lo integres al sandbox. |
| **ModelMapper / Dozer** (mapeo por reflexión en runtime)    | Ruptura. Contradice la filosofía de inmutabilidad de Java 21 Records y agrega "magia" opaca.             | Descartalo para este proyecto. Mencionalo en tus notas como "==alternativa que existe pero no aplica aquí==" para tu portafolio de conocimiento.                                                                                    |
| **Template-Driven Forms** (Angular)                         | Ruptura directa de la Cursor Rule Angular ("Use Reactive Forms for registration and login modules").     | Vale la pena conocer la diferencia conceptual (==declarativo vs imperativo==) para responder preguntas en una entrevista, pero no lo prototipés en este Spike.                                                                      |
|                                                             |                                                                                                          |                                                                                                                                                                                                                                     |

#### Conceptos Técnicos a Investigar (EN INGLÉS)

**Java 21 / Spring Boot:**
- `@RestController`, `@PostMapping`, `@RequestBody`
- `jakarta.validation.constraints` (`@NotBlank`, `@Email`, `@Size`, `@Min`, `@Max`)
- `@Valid` annotation on controller method parameters
- Java 21 `record` as Request/Response DTO
- `@Service` with constructor injection
- `ResponseEntity<T>` for HTTP response wrapping
- `@ExceptionHandler` and `@ControllerAdvice` for global error handling
- `MethodArgumentNotValidException` (Spring's default validation exception)
- Manual DTO-to-Entity mapping (constructor or static factory method)

**DB / ORM:**
- `@Entity`, `@Id`, `@GeneratedValue(strategy = GenerationType.IDENTITY)`
- `@Column` constraints (`nullable`, `length`, `unique`)
- `Spring Data JPA` `JpaRepository<T, ID>` interface
- `spring.jpa.hibernate.ddl-auto=create-drop` (H2 disposable schema)
- `data.sql` or `CommandLineRunner` for data seeding

**Angular:**
- `ReactiveFormsModule` (`FormGroup`, `FormControl`, `Validators`)
- `HttpClient.post<T>()` with typed generics
- TypeScript `interface` aligned with backend Record/DTO
- `inject()` function for service injection (modern DI pattern)
- Standalone component `imports` array (declaring `ReactiveFormsModule`, `HttpClientModule`)

**CSS / Ionic:**
- `<ion-input>`, `<ion-select>`, `<ion-button>`
- `<ion-item>` with `[errorText]` or manual `<ion-note>` for validation messages
- `<ion-toast>` for success/error feedback

#### Consideraciones de Sandbox

- **Repositorio satélite desechable.** Creá un proyecto Spring Boot nuevo con Spring Initializr (Web, JPA, H2, Validation) y un proyecto Angular/Ionic separado. No toques tu repositorio principal.
- **Timebox: 4 horas de flujo.** El entregable es conocimiento: "¿Los `Records` de Java 21 funcionan bien con `@Valid`? ¿El mapeo a la entidad JPA es trivial o complejo? ¿`HttpClient.post()` envía correctamente el JSON que Spring Boot espera?"
- **Data seeding:** Un `CommandLineRunner` con `@Profile("dev")` que inserte 2-3 usuarios representativos (un USER con datos completos, un registro con datos mínimos). Esto valida que el esquema JPA funciona.
- **Cuarentena:** Al terminar, documentá las conclusiones (formato de errores de validación que Spring devuelve, estructura exacta del JSON que Angular envía, incompatibilidades H2 vs PostgreSQL descubiertas). Después, archivá el repo. Jamás migrés este código.

---

### Definición de Propósito del Spike

### Propósito Técnico del Spike 1: Walking Skeleton y Flujo E2E

**Objetivo:** Validar la viabilidad de la arquitectura base mediante la implementación de un "corte vertical" (Walking Skeleton) desechable.

**Alcance de la implementación:**

1. **Frontend (Angular/Ionic):** Un formulario reactivo básico (máximo 3 campos) que capture datos, valide en el cliente y envíe un payload JSON mediante `HttpClient`.
    
2. **Backend (Spring Boot):** Un controlador que reciba el payload mediante un `Record` (DTO), aplique validaciones de Jakarta, y delegue a un servicio.
    
3. **Transformación y Lógica:** Un mapeo manual del DTO a la Entidad JPA, inyectando programáticamente un dato adicional en el backend (ej. un `createdAt` o forzar un texto a mayúsculas) para validar la manipulación en la capa de servicio.
    
4. **Persistencia (H2):** Guardado de la entidad en una base de datos en memoria.
    
5. **Verificación (GET Básico):** Un endpoint y una vista simplificada en Angular que liste los usuarios persistidos para comprobar visualmente el éxito del flujo.
    

---

