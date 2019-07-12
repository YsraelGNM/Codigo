using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webBikeStore.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "production");

            migrationBuilder.EnsureSchema(
                name: "sales");

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "brands",
                schema: "production",
                columns: table => new
                {
                    brand_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    brand_name = table.Column<string>(unicode: false, maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__brands__5E5A8E27A5FEE62E", x => x.brand_id);
                });

            migrationBuilder.CreateTable(
                name: "categories",
                schema: "production",
                columns: table => new
                {
                    category_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    category_name = table.Column<string>(unicode: false, maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__categori__D54EE9B4295A8F50", x => x.category_id);
                });

            migrationBuilder.CreateTable(
                name: "customers",
                schema: "sales",
                columns: table => new
                {
                    customer_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    first_name = table.Column<string>(unicode: false, maxLength: 255, nullable: false),
                    last_name = table.Column<string>(unicode: false, maxLength: 255, nullable: false),
                    phone = table.Column<string>(unicode: false, maxLength: 25, nullable: true),
                    email = table.Column<string>(unicode: false, maxLength: 255, nullable: false),
                    street = table.Column<string>(unicode: false, maxLength: 255, nullable: true),
                    city = table.Column<string>(unicode: false, maxLength: 50, nullable: true),
                    state = table.Column<string>(unicode: false, maxLength: 25, nullable: true),
                    zip_code = table.Column<string>(unicode: false, maxLength: 5, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__customer__CD65CB852D8F97EE", x => x.customer_id);
                });

            migrationBuilder.CreateTable(
                name: "stores",
                schema: "sales",
                columns: table => new
                {
                    store_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    store_name = table.Column<string>(unicode: false, maxLength: 255, nullable: false),
                    phone = table.Column<string>(unicode: false, maxLength: 25, nullable: true),
                    email = table.Column<string>(unicode: false, maxLength: 255, nullable: true),
                    street = table.Column<string>(unicode: false, maxLength: 255, nullable: true),
                    city = table.Column<string>(unicode: false, maxLength: 255, nullable: true),
                    state = table.Column<string>(unicode: false, maxLength: 10, nullable: true),
                    zip_code = table.Column<string>(unicode: false, maxLength: 5, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__stores__A2F2A30C7F510A75", x => x.store_id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "products",
                schema: "production",
                columns: table => new
                {
                    product_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    product_name = table.Column<string>(unicode: false, maxLength: 255, nullable: false),
                    brand_id = table.Column<int>(nullable: false),
                    category_id = table.Column<int>(nullable: false),
                    model_year = table.Column<short>(nullable: false),
                    list_price = table.Column<decimal>(type: "decimal(10, 2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__products__47027DF53DDAFB97", x => x.product_id);
                    table.ForeignKey(
                        name: "FK__products__brand___47DBAE45",
                        column: x => x.brand_id,
                        principalSchema: "production",
                        principalTable: "brands",
                        principalColumn: "brand_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__products__catego__48CFD27E",
                        column: x => x.category_id,
                        principalSchema: "production",
                        principalTable: "categories",
                        principalColumn: "category_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "staffs",
                schema: "sales",
                columns: table => new
                {
                    staff_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    first_name = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    last_name = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    email = table.Column<string>(unicode: false, maxLength: 255, nullable: false),
                    phone = table.Column<string>(unicode: false, maxLength: 25, nullable: true),
                    active = table.Column<byte>(nullable: false),
                    store_id = table.Column<int>(nullable: false),
                    manager_id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__staffs__1963DD9C429D0538", x => x.staff_id);
                    table.ForeignKey(
                        name: "FK__staffs__manager___5070F446",
                        column: x => x.manager_id,
                        principalSchema: "sales",
                        principalTable: "staffs",
                        principalColumn: "staff_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__staffs__store_id__5165187F",
                        column: x => x.store_id,
                        principalSchema: "sales",
                        principalTable: "stores",
                        principalColumn: "store_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "stocks",
                schema: "production",
                columns: table => new
                {
                    store_id = table.Column<int>(nullable: false),
                    product_id = table.Column<int>(nullable: false),
                    quantity = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__stocks__E68284D3D91C35E0", x => new { x.store_id, x.product_id });
                    table.ForeignKey(
                        name: "FK__stocks__product___49C3F6B7",
                        column: x => x.product_id,
                        principalSchema: "production",
                        principalTable: "products",
                        principalColumn: "product_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__stocks__store_id__4AB81AF0",
                        column: x => x.store_id,
                        principalSchema: "sales",
                        principalTable: "stores",
                        principalColumn: "store_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "orders",
                schema: "sales",
                columns: table => new
                {
                    order_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    customer_id = table.Column<int>(nullable: true),
                    order_status = table.Column<byte>(nullable: false),
                    order_date = table.Column<DateTime>(type: "date", nullable: false),
                    required_date = table.Column<DateTime>(type: "date", nullable: false),
                    shipped_date = table.Column<DateTime>(type: "date", nullable: true),
                    store_id = table.Column<int>(nullable: false),
                    staff_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__orders__4659622940B572CB", x => x.order_id);
                    table.ForeignKey(
                        name: "FK__orders__customer__4D94879B",
                        column: x => x.customer_id,
                        principalSchema: "sales",
                        principalTable: "customers",
                        principalColumn: "customer_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__orders__staff_id__4E88ABD4",
                        column: x => x.staff_id,
                        principalSchema: "sales",
                        principalTable: "staffs",
                        principalColumn: "staff_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__orders__store_id__4F7CD00D",
                        column: x => x.store_id,
                        principalSchema: "sales",
                        principalTable: "stores",
                        principalColumn: "store_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "order_items",
                schema: "sales",
                columns: table => new
                {
                    order_id = table.Column<int>(nullable: false),
                    item_id = table.Column<int>(nullable: false),
                    product_id = table.Column<int>(nullable: false),
                    quantity = table.Column<int>(nullable: false),
                    list_price = table.Column<decimal>(type: "decimal(10, 2)", nullable: false),
                    discount = table.Column<decimal>(type: "decimal(4, 2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__order_it__837942D409C1C2CC", x => new { x.order_id, x.item_id });
                    table.ForeignKey(
                        name: "FK__order_ite__order__4BAC3F29",
                        column: x => x.order_id,
                        principalSchema: "sales",
                        principalTable: "orders",
                        principalColumn: "order_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK__order_ite__produ__4CA06362",
                        column: x => x.product_id,
                        principalSchema: "production",
                        principalTable: "products",
                        principalColumn: "product_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_products_brand_id",
                schema: "production",
                table: "products",
                column: "brand_id");

            migrationBuilder.CreateIndex(
                name: "IX_products_category_id",
                schema: "production",
                table: "products",
                column: "category_id");

            migrationBuilder.CreateIndex(
                name: "IX_stocks_product_id",
                schema: "production",
                table: "stocks",
                column: "product_id");

            migrationBuilder.CreateIndex(
                name: "IX_order_items_product_id",
                schema: "sales",
                table: "order_items",
                column: "product_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_customer_id",
                schema: "sales",
                table: "orders",
                column: "customer_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_staff_id",
                schema: "sales",
                table: "orders",
                column: "staff_id");

            migrationBuilder.CreateIndex(
                name: "IX_orders_store_id",
                schema: "sales",
                table: "orders",
                column: "store_id");

            migrationBuilder.CreateIndex(
                name: "UQ__staffs__AB6E6164C336AF9D",
                schema: "sales",
                table: "staffs",
                column: "email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_staffs_manager_id",
                schema: "sales",
                table: "staffs",
                column: "manager_id");

            migrationBuilder.CreateIndex(
                name: "IX_staffs_store_id",
                schema: "sales",
                table: "staffs",
                column: "store_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "stocks",
                schema: "production");

            migrationBuilder.DropTable(
                name: "order_items",
                schema: "sales");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "orders",
                schema: "sales");

            migrationBuilder.DropTable(
                name: "products",
                schema: "production");

            migrationBuilder.DropTable(
                name: "customers",
                schema: "sales");

            migrationBuilder.DropTable(
                name: "staffs",
                schema: "sales");

            migrationBuilder.DropTable(
                name: "brands",
                schema: "production");

            migrationBuilder.DropTable(
                name: "categories",
                schema: "production");

            migrationBuilder.DropTable(
                name: "stores",
                schema: "sales");
        }
    }
}
